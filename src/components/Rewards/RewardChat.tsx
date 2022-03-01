import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import rewardContent from "@/json/reward.json";
import { updateWidget } from "@/redux/reward-slice";
import RewardCard from "./RewardCard";

export default function RewardChat() {
  const dispatch = useAppDispatch();

  function closeWidget() {
    dispatch(updateWidget());
  }

  return (
    <>
      <div className="reward-chat-box">
        <div className="chat-header flex align-items-center justify-between">
          <div className="flex flex-col">
            <h6 className="mt-2">Welcome to</h6>
            <h4>Sailfish + Rewards</h4>
          </div>
          <i onClick={closeWidget} className="ci-close"></i>
        </div>
        <div className="reward-card-group">
          {rewardContent.cards.map((card) => (
            <RewardCard card={card} key={card.title} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .chat-header {
            background: linear-gradient(
              135.19deg,
              hsla(35, 93%, 55%, 1),
              hsla(35, 100%, 37%, 1)
            );
            height: 120px;
            width: 100%;
            color: white;
            padding: 20px;
            padding-left: 30px;
            border-radius: 30px;
          }
          .chat-header h6,
          .chat-header h4 {
            color: white;
          }
          .reward-chat-box {
            background-color: white;
            border-radius: 30px;
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            position: fixed;
            right: 20px;
            bottom: 100px;
            width: 400px;
            z-index: 5000;
            height: 700px;
            overflow: hidden;
          }
          .reward-card-group {
            padding: 20px;
            height: 600px;
            overflow-y: scroll;
          }
          @media (max-width: 768px) {
            .chat-header {
              height: 100px;
              padding: 15px;
              padding-left: 20px;
              border-radius: 20px;
            }
            button.rewardButton span img {
              margin-right: 0px;
              height: 25px;
              width: 25px;
            }
            .chat-header h6 {
              font-size: 13px;
            }
            .chat-header h4 {
              color: white;
              font-size: 14px;
            }
            .reward-chat-box {
              width: 80%;
              height: 60%;
              overflow: scroll;
            }
          }
        `}
      </style>
    </>
  );
}
