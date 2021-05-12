import type { ReactElement, ReactNode } from "react";
import { FileTextIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Box } from "components";
import { groupBy } from "lodash";
import Link from "next/link";
import { styled } from "stitches.config";

const List = styled(Box, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  // paddingTop: "$1",
  minWidth: "280px",
  maxHeight: "200px",
  userSelect: "none",

  overflowX: "scroll",
});

const ListItem = styled("div", {
  justifyContent: "flex-start",
  fontSize: "$2",

  borderBottom: "1px solid $gray300",

  ":last-child": {
    borderBottom: "none",
  },

  // eslint-disable-next-line id-length
  a: {
    display: "flex",
    flexDirection: "row",
    padding: "$2 $3",
    textDecoration: "none",
    color: "$gray900",
    lineHeight: "1.25",

    span: {
      marginLeft: "$1",
    },

    "&:hover": {
      color: "$hiContrast",
      backgroundColor: "$gray200",
    },

    "&:active": {
      color: "inherit",
      // backgroundColor: "$gray100",
      // boxShadow: "inset 0 0 0 1px $colors$gray700",
    },

    "&:focus": {
      backgroundColor: "$gray200",
      boxShadow: "inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700",
      color: "red",
    },
  },
});

const ListSectionItem = styled("div", {
  position: "sticky",
  top: 0,
  padding: "$1 $3",
  lineHeight: "1",
  // backgroundColor: "$gray300",
  fontSize: "$1",
  fontWeight: 500,
  backgroundColor: "$gray200",
  color: "$gray900",
  cursor: "default",
});

interface Post {
  id: number;
  slug: string;
  title: string;
  publishedAt?: Date;
  createdAt: Date;
}

const allPosts: Post[] = [
  {
    id: 1,
    slug: "reducers-transducers-and-the-helm",
    title: "Reducers, transducers & the helm.",
    createdAt: new Date("2020-01-01"),
  },
  {
    id: 2,
    slug: "the-wet-codebase",
    title: "The WET Codebase",
    createdAt: new Date("2020-01-03"),
  },
  {
    id: 3,
    slug: "goodbye-clean-code",
    title: "Goodbye, Clean Code",
    createdAt: new Date("2020-01-05"),
  },
  {
    id: 4,
    slug: "my-decade-in-review",
    title: "My Decade in Review",
    createdAt: new Date("2020-01-07"),
  },
  {
    id: 5,
    slug: "what-are-the-react-team-principles",
    title: "What Are the React Team Principles?",
    createdAt: new Date("2020-01-12"),
  },
  {
    id: 6,
    slug: "on-let-vs-const",
    title: "On let vs const",
    publishedAt: new Date("2020-01-14"),
    createdAt: new Date("2020-01-7"),
  },
  {
    id: 7,
    slug: "what-is-javascript-made-of",
    title: "What Is JavaScript Made Of?",
    publishedAt: new Date("2020-01-17"),
    createdAt: new Date("2020-01-12"),
  },
  {
    id: 8,
    slug: "how-does-the-development-mode-work",
    title: "How Does the Development Mode Work?",
    publishedAt: new Date("2020-01-20"),
    createdAt: new Date("2020-01-12"),
  },
  {
    id: 9,
    slug: "algebraic-effects-for-the-rest-of-us",
    title: "Algebraic Effects for the Rest of Us",
    publishedAt: new Date("2020-02-05"),
    createdAt: new Date("2020-01-15"),
  },
  {
    id: 10,
    slug: "preparing-for-tech-talk-part-3-content",
    title: "Preparing for a Tech Talk, Part 3: Content",
    publishedAt: new Date("2020-02-10"),
    createdAt: new Date("2020-02-10"),
  },
];

const sections = groupBy(allPosts, (post) =>
  post.publishedAt == null ? "Drafts" : "Published",
);

type Item =
  | {
      type: "section";
      value: string;
    }
  | {
      type: "item";
      value: Post;
    };

const items = Object.entries(sections).reduce<Item[]>(
  (results, [section, posts]) => {
    results.push({ type: "section", value: section });

    for (const post of posts) {
      results.push({ type: "item", value: post });
    }

    return results;
  },
  [],
);

function renderItem(item: Item): ReactNode {
  switch (item.type) {
    case "section":
      return <ListSectionItem key={item.value}>{item.value}</ListSectionItem>;
    case "item": {
      const post = item.value;
      return (
        <ListItem key={post.id}>
          <Link href={`edit/${post.slug}`}>
            <a>
              {post.publishedAt == null ? <FileTextIcon /> : <ReaderIcon />}{" "}
              <span>{post.title}</span>
            </a>
          </Link>
        </ListItem>
      );
    }
    default:
      return null;
  }
}

export default function EditorDocumentListView(): ReactElement {
  return <List>{items.map(renderItem)}</List>;
}
