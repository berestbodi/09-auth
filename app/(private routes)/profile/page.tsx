import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import css from "./ProfilePage.module.css";

export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "View and manage your NoteHub user profile information.",
  openGraph: {
    title: "User Profile | NoteHub",
    description: "Manage your account settings and profile information.",
    url: "https://notehub-app.vercel.app/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        alt: "NoteHub Profile",
      },
    ],
  },
};

export default async function ProfilePage() {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>

        <div className={css.avatarWrapper}>
          <Image
            src={"https://ac.goit.global/fullstack/react/default-avatar.jpg"}
            alt={` avatar`}
            width={120}
            height={120}
            className={css.avatar}
            priority
          />
        </div>

        <div className={css.profileInfo}>
          <p>Username: </p>
          <p>Email: </p>
        </div>
      </div>
    </main>
  );
}
