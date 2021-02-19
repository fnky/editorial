import { PrismaClient, PostStatus } from "@prisma/client";
import * as faker from "faker";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  const draftPostTitle = faker.lorem.sentences();
  const draftPostSlug = slugify(draftPostTitle, { lower: true });

  const draftPostWithTags = await prisma.post.create({
    data: {
      title: draftPostTitle,
      body: faker.lorem.paragraphs(3),
      slug: draftPostSlug,
      status: PostStatus.DRAFT,
      tags: {
        connectOrCreate: {
          where: {
            slug: "javascript",
          },
          create: {
            label: "JavaScript",
            slug: "javascript",
          },
        },
      },
    },
  });

  const publishedPostTitle = faker.lorem.sentences();
  const publishedPostSlug = slugify(publishedPostTitle, { lower: true });

  const publishedPostWithTags = await prisma.post.create({
    data: {
      title: publishedPostTitle,
      body: faker.lorem.paragraphs(3),
      slug: publishedPostSlug,
      status: PostStatus.PUBLISHED,
      tags: {
        connectOrCreate: {
          where: {
            slug: "react",
          },
          create: {
            label: "React.js",
            slug: "react",
          },
        },
      },
    },
  });

  console.log("Seeded:", {
    draftPostWithTags: draftPostWithTags.id,
    publishedPostWithTags: publishedPostWithTags.id,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
