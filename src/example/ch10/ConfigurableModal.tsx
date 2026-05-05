import { type ReactNode, useState } from "react";

interface ConfigurableModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerContent?: ReactNode;
  bodyContent: ReactNode;
  footerContent?: ReactNode;
}

const ConfigurableModal = ({
  isOpen,
  onClose,
  headerContent,
  bodyContent,
  footerContent,
}: ConfigurableModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 헤더 슬롯 */}
        {headerContent && <div className="modal-header">{headerContent}</div>}

        {/* 본문 슬롯 */}
        <div className="modal-body">{bodyContent}</div>

        {/* 푸터 슬롯 */}
        {footerContent && <div className="modal-footer">{footerContent}</div>}

        {/* 헤더가 없어도 닫기 버튼은 항상 보이도록 처리 */}
        <button type="button" className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

// ConfigurableModal 을 실제 사용하는 부모 컴포넌트
export default function SlotPatternApp() {
  const [modalType, setModalType] = useState<"confirm" | "info" | null>(null);

  const confirmHeader = <h3>삭제 확인</h3>;
  const confirmBody = <p>정말로 이 항목을 삭제하시겠습니다?</p>;
  const confirmFooter = (
    <>
      <button type="button" onClick={() => setModalType(null)}>
        취소
      </button>
      <button
        type="button"
        onClick={() => {
          alert("삭제됨!");
          setModalType(null);
        }}
      >
        삭제
      </button>
    </>
  );

  const infoBody = <p>새로운 기능이 추가되었습니다.</p>;
  const infoFooter = (
    <button type="button" onClick={() => setModalType(null)}>
      확인
    </button>
  );

  return (
    <div>
      <button type="button" onClick={() => setModalType("confirm")}>
        삭제 확인 모달 열기
      </button>
      <button type="button" onClick={() => setModalType("info")}>
        정보 모달 열기
      </button>

      {/* 모든 슬롯에 콘텐츠 전달 */}
      <ConfigurableModal
        isOpen={modalType === "confirm"}
        onClose={() => setModalType(null)}
        headerContent={confirmHeader}
        bodyContent={confirmBody}
        footerContent={confirmFooter}
      />

      {/* body와 footer 슬롯만 사용 */}
      <ConfigurableModal
        isOpen={modalType === "info"}
        onClose={() => setModalType(null)}
        // headerContent는 생략
        bodyContent={infoBody}
        footerContent={infoFooter}
      />
    </div>
  );
}
