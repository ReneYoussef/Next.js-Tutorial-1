import { Card } from "@/src/components/card";import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <Card><div>
            Archived Notification
            </div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    );
}
