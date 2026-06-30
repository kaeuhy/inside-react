import { Suspense, useState } from "react";

function ProfilePage() {
  const [resource, setResource] = useState(initialResource);
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1>프로필 로딩 중</h1>
          </>
        }
      >
        <Sibling name="one" />
        <ProfileDetails resource={resource} />
        <Suspense fallback={<h1>게시물 로딩 중...</h1>}>
          <Sibling name="two" />
          <ProfileTimeline resource={resource} />
          <Sibling name="three" />
        </Suspense>
        <Sibling name="four" />
      </Suspense>
    </>
  );
}

export function fetchProfileData() {
  let userPromise = fetchUser();
  let postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    },
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
