import { PostStatus } from "@prisma/client";
import { inputObjectType, mutationType, nonNull } from "nexus";
import slugify from "slugify";

const CreateTagInput = inputObjectType({
  name: "CreateTagInput",
  definition(t) {
    t.nonNull.string("slug");
    t.nonNull.string("label");
  },
});

type CreateTagInput = {
  slug: string;
  label: string;
};

const CreateDraftInput = inputObjectType({
  name: "CreateDraftInput",
  definition(t) {
    t.nonNull.string("title");
    t.nonNull.string("body");
    t.string("slug");
    t.list.field("tags", {
      type: CreateTagInput,
    });
  },
});

// TODO: Find a way to get the fields created in the definition of the input.
type CraftDraftInput = {
  title: string;
  body: string;
  slug?: string;
  tags?: CreateTagInput[];
};

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOnePost({
      alias: "createPost",
    });

    t.field("createDraft", {
      type: "Post",
      args: {
        // input: arg({
        //   type: CreateDraftInput,
        // }),
        input: nonNull(CreateDraftInput.asArg()),
      },
      resolve(_root, args: { input: CraftDraftInput }, context) {
        return context.prisma.post.create({
          data: {
            title: args.input.title,
            body: args.input.body,
            slug:
              args.input.slug != null
                ? args.input.slug
                : slugify(args.input.title),
            status: PostStatus.DRAFT,
            tags: {
              connectOrCreate: args.input.tags
                ? args.input.tags.map((tag) => ({
                    where: { slug: tag.slug },
                    create: { label: tag.label, slug: tag.slug },
                  }))
                : undefined,
            },
          },
        });
      },
    });
  },
});
