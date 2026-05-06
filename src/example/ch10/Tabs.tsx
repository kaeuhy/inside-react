import {
  type ButtonHTMLAttributes,
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface TabsContextProps {
  activeTab: string | number;
  setActiveTab: (id: string | number) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
};

interface TabsProps {
  children: ReactNode;
  defaultValue: string | number;
}

function Tabs({ children, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | number>(defaultValue);
  const contextValue = useMemo(
    () => ({ activeTab, setActiveTab }),
    [activeTab],
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
}

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

function Tab({ children, id, ...props }: TabProps) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === id;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(id)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

function TabPanel({ children, id, ...props }: TabPanelProps) {
  const { activeTab } = useTabs();
  const isActive = activeTab === id;
  return (
    <div role="tabpanel" hidden={!isActive} {...props}>
      {children}
    </div>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>;
}

function TabPanels({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

function App() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.TabList aria-label="샘플 탭">
        <Tabs.Tab id="tab1">탭 1</Tabs.Tab>
        <Tabs.Tab id="tab2">탭 1</Tabs.Tab>
        <Tabs.Tab id="tab3">탭 1</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanels>
        <Tabs.TabPanel id="tab1">
          <p>탭 1의 내용입니다.</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel id="tab2">
          <p>탭 2의 내용입니다. 다른 내용을 포함할 수 있습니다.</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel id="tab3">
          <p>탭 3의 내용입니다. 이미지를 넣을 수도 있습니다.</p>
        </Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
}
