import { objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.slug();
    t.model.body();
    t.model.tags();
    t.model.status();
    t.model.publishedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
