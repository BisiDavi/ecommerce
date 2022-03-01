import { SpinnerRoller } from "@/components/Loader/SpinnerLoader";

interface buttonProps {
  disable: boolean;
  className: string;
  onClick?: () => void;
  loading: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
}

export function Button({
  disable,
  className,
  onClick,
  loading,
  text,
  type,
}: buttonProps) {
  const disableBtn = disable ? disable : false;
  const loadingState = loading ? "loading" : "";
  const btnType = type ? type : "button";
  return (
    <button
      className={`btn position-relative flex justify-center items-center ${className}`}
      disabled={disableBtn}
      onClick={onClick}
      type={btnType}
      aria-label="button"
    >
      {loading && (
        <a>
          <SpinnerRoller />
        </a>
      )}
      <p className={`mb-0 text-truncate ${loadingState}`}>
        {loading ? "Submitting ..." : text}
      </p>
      <style jsx>
        {`
          .loading {
            margin-left: 35px;
          }
        `}
      </style>
    </button>
  );
}
