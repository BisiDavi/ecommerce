/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { useAppDispatch } from "@/hooks/useRedux";
import { updateStage, updateWidget } from "@/redux/reward-slice";

interface Props {
  content: {
    title: string;
    items: {
      icon: string;
      text1: string;
      text2: string;
    }[];
  };
}

export default function RewardView({ content }: Props) {
  const dispatch = useAppDispatch();

  function viewRewardDetails(rewardMethod: string) {
    dispatch(updateStage(rewardMethod));
  }

  function closeWidget() {
    dispatch(updateWidget());
  }

  return (
    <>
      <div className="rewards-list">
        <div className="header flex justify-between align-items-center">
          <span className="flex align-items-center">
            <i
              onClick={() => viewRewardDetails("default")}
              className="ci-arrow-left mr-4"
            ></i>
            <h6>Sailfish + Rewards</h6>
          </span>
          <i onClick={closeWidget} className="ci-close"></i>
        </div>
        <div className="content">
          <h4>{content.title}</h4>
          <ul className="list">
            {content.items.map((item: any) => (
              <li
                key={item.text1}
                className="list-item flex align-items-center"
              >
                <img src={item.icon} className="mr-3" alt={item.text1} />
                <span className="flex flex-col">
                  <h6>{item.text1}</h6>
                  <p>{item.text2}</p>
                </span>
              </li>
            ))}
          </ul>
          <div className="banner">Join now for free to start earning</div>
          <button aria-label="Join sailfish pro club" className="button">
            Join now
          </button>
          <p className="signin text-center">
            Already have an account?{" "}
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .rewards-list .header {
            background: linear-gradient(
              135.19deg,
              hsla(35, 93%, 55%, 1),
              hsla(35, 100%, 37%, 1)
            );
            height: 70px;
            width: 100%;
            color: white;
            padding: 10px;
            border-radius: 15px;
          }
          .list-item {
            margin: 15px 0px;
          }
          .list-item span {
            border-bottom: 1px solid #e6e6e6;
            width: 100%;
            padding-bottom: 5px;
            margin-bottom: 5px;
          }
          .list-item h6 {
            font-weight: 400;
            font-size: 15px;
          }
          .list-item p {
            margin-bottom: 0;
            font-size: 13px;
          }
          .rewards-list i {
            cursor: pointer;
          }
          .content button {
            margin: auto;
            border: none;
            color: white;
            background-color: #f79f24;
            padding: 10px;
            border-radius: 5px;
            font-size: 13px;
            margin-bottom: 10px;
            display: flex;
          }
          .content button:hover {
            opacity: 0.8;
          }
          .content h4 {
            font-size: 16px;
            margin: 15px 0px 20px 40px;
          }
          .header span h6 {
            margin-bottom: 0;
            color: white;
            margin-left: 10px;
          }
          .rewards-list {
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            z-index: 5000;
            position: fixed;
            right: 20px;
            bottom: 100px;
            width: 400px;
            border-radius: 15px;
            background-color: white;
          }
          .list-item img {
            height: 40px;
            width: 40px;
            margin-right: 20px;
          }
          .content {
            flex-direction: column;
          }
          .banner {
            background-color: #f4f6fb;
            padding: 16px;
            border-radius: 10px;
            margin: 10px auto;
            width: 80%;
            font-size: 14px;
            text-align: center;
          }
          @media (max-width: 768px) {
            .rewards-list {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  );
}
