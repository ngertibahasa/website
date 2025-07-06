// app/blog/page.tsx
import Container from '@/components/Container';
import Link from 'next/link';

async function getAllBlogPosts() {
  // Contoh data dummy
  const posts = [
    { slug: 'judul-postingan-pertama', title: 'Judul Postingan Pertama' },
    { slug: 'judul-postingan-kedua', title: 'Judul Postingan Kedua' },
    { slug: 'another-post-example', title: 'Another Post Example' },
  ];
  return posts;
}

export default async function BlogListPage() {
  const posts = await getAllBlogPosts();

  return (
    <Container className='my-32'>
      <h1>Daftar Postingan Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}