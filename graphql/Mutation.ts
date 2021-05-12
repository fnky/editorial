import { PostStatus } from "@prisma/client";
import { inputObjectType, mutationType, nonNull } from "nexus";
import slugify from "../utils/slugify";

const CreateTagInput = inputObjectType({
  name: "CreateTagInput",
  definition(t) {
    t.nonNull.string("slug");
    t.nonNull.string("label");
  },
});

interface CreateTagInput {
  slug: string;
  label: string;
}

const CreateDraftInput = inputObjectType({
  name: "CreateDraftInput",
  definition(t) {
    t.nonNull.string("title");
    t.nonNull.string("body");
    t.string("slug");
    t.list.field("tags", {
      type: nonNull(CreateTagInput),
    });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOnePost({
      alias: "createPost",
    });

    t.field("createDraft", {
      type: "Post",
      args: {
        input: nonNull(CreateDraftInput.asArg()),
      },
      resolve(_root, args, context) {
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
              connectOrCreate: args.input.tags?.map((tag) => ({
                where: { slug: tag.slug },
                create: { label: tag.label, slug: tag.slug },
              })),
            },
          },
        });
      },
    });
  },
});
