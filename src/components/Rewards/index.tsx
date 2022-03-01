import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateWidget } from "@/redux/reward-slice";
import RewardButton from "./RewardButton";
import rewardsTab from "./RewardsTab";

export default function Reward() {
  const { stage, showWidget } = useAppSelector((state) => state.rewardWidget);
  const dispatch = useAppDispatch();

  function displayChat() {
    dispatch(updateWidget());
  }

  return (
    <>
      <div className="reward-widget flex flex-col">
        {showWidget && rewardsTab(stage)}
        <RewardButton showChat={showWidget} onClick={displayChat} />
      </div>
      <style jsx>
        {`
          .reward-widget {
            position: fixed;
            z-index: 1000;
            right: 20px;
            bottom: 20px;
          }
          @media (max-width: 768px) {
            .reward-widget {
              bottom: 100px;
              right: 0px;
            }
          }
        `}
      </style>
    </>
  );
}
