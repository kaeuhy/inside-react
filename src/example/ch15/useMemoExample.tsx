// 리액트 내부에서 컴포넌트별 훅 상태를 저장하는 가상의 저장소
const componentHooks: Map<any, { list: HookState[]; index: number }> = new Map();

// 현재 렌더링 중인 컴포넌트를 가리키는 포인터
let currentComponent: any = null;

interface HookState {
    memoizedValue: any;
    deps: any[] | undefined;
}

function createHook(): HookState {
    return {memoizedValue: null, deps: undefined}
}

// useMemo 훅의 간소화된 의사코드
function useMemo<T>(callback: () => T, dependencies: any[] | undefined): T {
    if (!currentComponent) {
        throw new Error("훅은 컴포넌트 렌더링 중에만 호출될 수 있습니다")
    }

    // 현재 컴포넌트에 해당하는 훅 저장소를 가져오거나 새로 생성함
    if (!componentHooks.has(currentComponent)) {
        componentHooks.set(currentComponent, {list: [], index: 0})
    }

    const hooks = componentHooks.get(currentComponent)!;
    // 현재 훅의 인덱스를 가져오고, 다음 훅을 위해 1 증가시킴
    const hookIndex = hooks.index++;

    let hook = hooks.list[hookIndex] as HookState | undefined;

    // 처음 호출시 상태를 초기화
    if (!hook) {
        hook = createHook();
        hooks.list[hookIndex] = hook;
    }

    // 의존성이 없거나 -> 첫 렌더링, 현재와 다르다면 값을 새로 계산함
    if (!hook.deps || !dependencies || !depsEqual(dependencies, hook.deps)) {
        hook.memoizedValue = callback();
        hook.deps = dependencies;
    }

    // 의존성이 같다면, 그대로 이전 값 반환
    return hook.memoizedValue;
}

// 두 의존성 배열을 비교한느 헬퍼 함수
function depsEqual(newDeps: any[], oldDeps: any[] | null): boolean {
    if (oldDeps === null) return false;
    if (newDeps.length !== oldDeps.length) return false;

    return newDeps.every((dep, i) => Object.is(dep, oldDeps[i]))
}