import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { parser, serializer } from "rich-markdown-editor/dist/server";

// @TODO: Add atoms that can be used to save the document to a server,
// and likely use a side effect to show a toast.
// See https://recoiljs.org/docs/guides/asynchronous-data-queries
// See https://recoiljs.org/docs/guides/atom-effects

// Ideas: Maybe using GitHub as a database or something? Would require a
// commit-based publish thing.

const { persistAtom } = recoilPersist({
  key: "editor",
  storage: localStorage,
});

export const contentState = atom<string>({
  key: "content",
  default: "# New Document",
  effects_UNSTABLE: [persistAtom],
});

// @TODO: This is temporary. Ideally we wan't to take the title of the heading
// in the editor, only if the title hasn't been manually set for the document.
export const titleState = selector({
  key: "title",
  get: ({ get }) => {
    const content = get(contentState);

    try {
      // parse the markdown content to an AST.
      const parsed = parser.parse(content);

      // grab the first node.
      const firstNode = parsed.nodeAt(0);

      // make sure the node is a heading element.
      if (firstNode.type.name === "heading") {
        // pull the title of the document
        return serializer.serialize(firstNode, {});
      }
    } catch (e) {
      return "Untitled";
    }

    return "Untitled";
  },
});

export const readOnlyState = atom({
  key: "readOnly",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const darkState = atom({
  key: "dark",
  default: true,
});

export const templateState = atom({
  key: "template",
  default: false,
});
