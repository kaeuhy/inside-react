import { ComponeneType, type ComponentType, useEffect, useState } from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

function withLoadingSpinner<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  function ComponentWithLoadingSpinner({
    isLoading,
    ...props
  }: P & WithLoadingProps) {
    if (isLoading) {
      return <div>로딩 중...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  ComponentWithLoadingSpinner.displayName = `withLoadingSpinner(${wrappedComponentName})`;

  return ComponentWithLoadingSpinner;
}

interface UserProfileProps {
  userId: string;
  name: string;
  email: string;
}

function UserProfile({ userId, name, email }: UserProfileProps) {
  return (
    <div>
      <h3>유저 프로필 (ID: {userId})</h3>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
    </div>
  );
}

// HOC를 적용한 컴포넌트
const UserProfileWithLoading = withLoadingSpinner(UserProfile);

export default function HOCExampleApp() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserProfileProps | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setUserData({
        userId: "user-123",
        name: "단테",
        email: "dante@example.com",
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* 다음 코드랑 같음
      <UserProfileWithLoading isLoading={loading} userId="user-123" name="단테" email="dante@example.com" /> */}
      <UserProfileWithLoading isLoading={loading} {...userData} />
    </div>
  );
}
