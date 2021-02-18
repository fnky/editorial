import { queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts({
      filtering: true,
      ordering: true,
      pagination: true,
    });

    // t.list.field("searchPosts", {
    //   type: "Post",
    //   args: { searchString: stringArg() },
    //   resolve(_root, args: { searchString: string }, context) {
    //     return context.prisma.post.findMany({
    //       where: {
    //         OR: [
    //           { title: { contains: args.searchString } },
    //           { body: { contains: args.searchString } },
    //         ],
    //       },
    //     });
    //   },
    // });
  },
});
