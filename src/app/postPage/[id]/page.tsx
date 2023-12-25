import getIndividualPost from "@/api/getIndividualPost/getIndividualPost";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import PostTemplate from "@/components/templates/postTemplate/PostTemplate";

async function PostPage({ params }: { params: { id: string } }) {
  const data = await getIndividualPost(params.id);
  const post = data.data;

  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <PostTemplate post={post} />
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
