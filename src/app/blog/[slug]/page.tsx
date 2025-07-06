// app/blog/[slug]/page.tsx
import Container from '@/components/Container';
import { notFound } from 'next/navigation';

// Asumsi ini adalah fungsi untuk mengambil data blog
// Dalam aplikasi nyata, ini bisa dari database, API, atau file markdown
async function getBlogPostBySlug(slug: string) {
  // Contoh data dummy
  const posts = [
    { slug: 'judul-postingan-pertama', title: 'Judul Postingan Pertama', content: 'Konten postingan pertama...' },
    { slug: 'judul-postingan-kedua', title: 'Judul Postingan Kedua', content: 'Konten postingan kedua...' },
    { slug: 'another-post-example', title: 'Another Post Example', content: 'This is another example post.' },
  ];
  return posts.find(post => post.slug === slug);
}

// Generasi slug statis (opsional tapi disarankan untuk SEO dan performa)
// Ini akan membuat halaman statis untuk setiap slug yang dikembalikan oleh generateStaticParams
export async function generateStaticParams() {
  // Ambil semua slug yang mungkin dari sumber data Anda
  // Contoh dummy:
  const slugs = [
    { slug: 'judul-postingan-pertama' },
    { slug: 'judul-postingan-kedua' },
    { slug: 'another-post-example' },
  ];
  return slugs;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound(); // Menampilkan halaman 404 jika postingan tidak ditemukan
  }

  return (
    <Container className='my-32'>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {/* Tambahkan konten blog lainnya di sini */}
      </div>
    </Container>
  );
}