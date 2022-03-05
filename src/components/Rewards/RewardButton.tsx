import { AiFillGift } from "react-icons/ai";

interface Props {
  onClick: () => void;
  showChat: boolean;
}

export default function RewardButton({ showChat, onClick }: Props) {
  return (
    <>
      <button
        aria-label="display rewards"
        onClick={onClick}
        className="rewardButton bg-red-500 "
      >
        {!showChat ? (
          <span className="imgContainer flex items-center">
            <AiFillGift size={20} />
            <p className="text-xs font-bold mx-1 mb-0">Rewards</p>
          </span>
        ) : (
          <span className="cancel">X</span>
        )}
      </button>
      <style jsx>{`
        button.rewardButton {
          height: 40px;
          max-width: 120px;
          color: white;
          padding: 20px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          border: none;
          position: absolute;
          right: 30px;
          bottom: 0px;
        }
        button.rewardButton:hover {
          opacity: 0.8;
        }
        button.rewardButton span img {
          height: 30px;
          width: 30px;
          margin-right: 3px;
        }
        .imgContainer {
          display: flex;
          align-items: center;
          width: 100px;
        }
        .cancel {
          font-size: 25px;
        }
        @media (max-width: 768px) {
          button.rewardButton {
            font-size: 14px;
            height: 40px;
            max-width: 120px;
          }
          button.rewardButton span img {
            margin-right: 0px;
            height: 25px;
            width: 25px;
          }
        }
      `}</style>
    </>
  );
}
