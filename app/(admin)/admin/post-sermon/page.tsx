import { getSession } from "@/lib/session";
import { PostSermonForm } from "@components/PostSermonForm/PostSermonForm";

const PostSermonPage = async () => {
  // get session which contains user and  role
  // const session = await getSession();
  // console.log({ session });

  return (
    <div className="p-4">
      <div className="card bg-neutral-200 shadow-xl p-4">
        <PostSermonForm />
      </div>
    </div>
  );
};

export default PostSermonPage;
