import dynamic from "next/dynamic";

import rewardContent from "@/json/reward.json";
const RewardChat = dynamic(() => import("./RewardChat"));
const EarnRewards = dynamic(() => import("./RewardView"));

export default function rewardsTab(method: string) {
  switch (method) {
    case "ways-to-earn":
      return <EarnRewards content={rewardContent.earn} />;
    case "ways-to-redeem":
      return <EarnRewards content={rewardContent.redeem} />;
    default:
      return <RewardChat />;
  }
}
