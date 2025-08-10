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

function BlogCard(props: { title: string }) {
  return (
    <div className='w-full p-5 space-y-2 shadow-lg rounded-lg hover:scale-[1.05]'>
      <div className="bg-[#0D1282] rounded-md h-[150px]"></div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default async function BlogListPage() {
  const posts = await getAllBlogPosts();

  return (
    <Container className='my-32 space-y-5'>
      <h1 className='text-xl font-semibold pt-10'>Daftar Postingan Blog</h1>
      <div className="flex gap-4">
        {
          posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <BlogCard title={post.title} />
            </Link>
          ))
        }
      </div>
      {/* <ul className='flex gap-4'>
        {posts.map(post => (
          <li key={post.slug} className='hover:text-blue-700'>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul> */}
    </Container>
  );
}