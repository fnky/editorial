import { atom, DefaultValue, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { parser, serializer } from "rich-markdown-editor/dist/server";
import slugify from "utils/slugify";

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
  key: "Content",
  default: "# New Document",
  effects_UNSTABLE: [persistAtom],
});

export const titleState = atom({
  key: "Title",
  default: selector({
    key: "Title/Default",
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
  }),
});

export const titleSlugState = atom<string>({
  key: "TitleSlug",
  default: selector({
    key: "Slug/Default",
    get: ({ get }) => {
      const title = get(titleState);
      return slugify(title);
    },
  }),
});

export const slugState = selector<string>({
  key: "Slug",
  get: ({ get }) => get(titleSlugState),
  set: ({ set }, newValue) => {
    set(
      titleSlugState,
      newValue instanceof DefaultValue ? newValue : slugify(newValue),
    );
  },
});

export const readOnlyState = atom({
  key: "ReadOnly",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const darkState = atom({
  key: "Dark",
  default: true,
});

export const templateState = atom({
  key: "Template",
  default: false,
});
