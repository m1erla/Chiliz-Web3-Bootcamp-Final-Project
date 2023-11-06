import Link from "next/link";
import { FC } from "react";
import styles from "@/app/styles/Home.module.css";

interface CardProps {
  href: string;
  title: string;
  description: string;
}

const CardLink: FC<CardProps> = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <h2>
          {title} <span>-&gt;</span>
        </h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CardLink;
