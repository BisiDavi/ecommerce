/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { useAppDispatch } from "@/hooks/useRedux";
import { updateStage } from "@/redux/reward-slice";

interface Props {
  card: {
    title: string;
    text: string;
    type: string;
    links?: {
      icon: string;
      title: string;
      route?: string;
      text?: string;
    }[];
  };
}

export default function RewardCard({ card }: Props) {
  const dispatch = useAppDispatch();
  function viewRewardDetails(rewardMethod: string) {
    dispatch(updateStage(rewardMethod));
  }
  return (
    <>
      <div className="reward-card">
        <h6 className="title text-center">{card.title}</h6>
        <p className="text-center">{card.text}</p>
        {card.type === "button" && (
          <div className="button-view flex flex-col">
            <Link href="/my-account" passHref>
              <button aria-label="join sailfish rewards">Join Now</button>
            </Link>
            <p className="text-center">
              Already have an account ?{" "}
              <Link href="/my-account" passHref>
                <a>Sign in</a>
              </Link>
            </p>
          </div>
        )}
        {card.type !== "button" && (
          <ul className="menu-link">
            {card.type === "links"
              ? card?.links?.map((link: any) => (
                  <li
                    key={link.title}
                    onClick={() => viewRewardDetails(link.route)}
                    className="point-list links flex align-items-center justify-between"
                  >
                    <div className="flex align-items-center">
                      <img className="icon" src={link.icon} alt="icon" />
                      <p>{link.title}</p>
                    </div>
                    <i className="ci-arrow-right"></i>
                  </li>
                ))
              : card.type === "referrals" &&
                card?.links?.map((item, index) => (
                  <li
                    key={index}
                    className="point-list referral flex align-items-center"
                  >
                    <img className="icon" src={item.icon} alt="icon" />
                    <span className="flex flex-col">
                      <h6>{item.title}</h6>
                      <p>{item.text}</p>
                    </span>
                  </li>
                ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .menu-link {
          padding: 0px;
        }
        img.icon {
          height: 40px;
          width: 40px;
        }
        .button-view button {
          width: 90px;
        }
        .reward-card h6 {
          font-size: 15px;
          font-weight: 500;
        }
        .button-view button {
          margin: auto;
          border: none;
          color: white;
          background-color: #f79f24;
          padding: 10px;
          border-radius: 5px;
          font-size: 13px;
          margin-bottom: 10px;
        }
        .button-view button:hover {
          opacity: 0.8;
        }
        .point-list {
          margin: 0px 0px 10px 15px;
        }
        .point-list.justify-between:hover {
          opacity: 0.5;
        }
        .point-list img.icon {
          margin-right: 20px;
        }
        .point-list p {
          margin-bottom: 0px;
        }
        li.point-list.links:first-child {
          border-bottom: 1px solid #e6e6e6;
          padding-bottom: 10px;
        }
        .reward-card p {
          font-size: 13px;
          font-weight: 300;
        }
        .reward-card {
          width: 350px;
          -webkit-animation: fadeSlideOut 0.2s ease;
          animation: fadeSlideOut 0.2s ease;
          -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          transform: translate(-10px);
          border-radius: 10px;
          -webkit-animation: fadeSlideIn 0.3s ease;
          animation: fadeSlideIn 0.3s ease;
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          background-color: #fff;
          box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
          margin-bottom: 12px;
          margin-left: 9px;
          overflow: hidden;
          padding: 16px 12px;
          color: black;
          position: relative;
        }
        .referral h6 {
          margin-bottom: 0px;
        }
        @media (max-width: 768px) {
          .reward-card {
            width: 250px;
          }
        }
      `}</style>
    </>
  );
}
