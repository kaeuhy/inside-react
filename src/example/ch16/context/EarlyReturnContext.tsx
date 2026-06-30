// import { useContext } from "react";
//
// function ConditionalReaderWithUseContext({ isActive }: ConditionalReaderProps) {
//   const theme = useContext(ThemeContext);
//
//   if (!isActive) {
//     return <p>비활성화 상태</p>;
//   }
//
//   if (theme === null) {
//     return <p>테마 정보 없음</p>;
//   }
//
//   return <p>{theme}</p>;
// }

// import { use } from "react";
//
// function ConditionalReaderWithUseUse({ isActive }: ConditionalReaderProps) {
//   if (!isActive) {
//     return <p>비활성화 상태</p>;
//   }
//
//   const theme = use(ThemeContext);
//
//   if (theme === null) {
//     return <p>테마 정보 없음</p>;
//   }
//
//   return <p>{theme}</p>;
// }

import { Suspense } from "react";

const resource = createProfileResource();

interface ProfileResource {
  userPromise: Promise<{ name: string }>;
  postsPromise: Promise<{ id: number; text: string }>;
}

function ProfileDetails({
  userPromise,
}: {
  userPromise: ProfileResource["userPromise"];
}) {
  const user = use(userPromise);
  return <h1>{user.name}</h1>;
}

function ProfilePosts({
  postsPromise,
}: {
  postsPromise: ProfileResource["postsPromise"];
}) {
  const posts = use(postsPromise);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<h2>페이지 로딩 중...</h2>}>
      <ProfileDetails userPromise={resource.userPromise} />
      <Suspense fallback={<p>게시물 로딩 중...</p>}>
        <ProfilePosts postsPromise={resource.postsPromise} />
      </Suspense>
    </Suspense>
  );
}
