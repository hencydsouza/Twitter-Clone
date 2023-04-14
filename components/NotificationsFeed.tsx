import useCurrentUser from '@/hooks/useCurrentUser'
import useNotifications from '@/hooks/useNotifications';
import React, { useEffect } from 'react'
import { BsTwitter } from 'react-icons/bs';

const NotificationsFeed = () => {
    const { data: currentUser, mutate: mutateCurrentUSer } = useCurrentUser();
    const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

    useEffect(() => {
        mutateCurrentUSer();
    }, [mutateCurrentUSer]);

    if (fetchedNotifications.length === 0) {
        <div className='
        text-neutral-600 
        text-center
        p-6
        text-xl
        '>
            No Notifications
        </div>
    }

    return (
        <div className='
        flex
        flex-col
        '>
            {fetchedNotifications.map((notification: Record<string, any>) => (
                <div
                    key={notification.id}
                    className='
                flex 
                flex-row
                items-center
                p-6
                gap-4
                border-b-[1px]
                border-neutral-800
                '>
                    <BsTwitter color='white' size={32} />
                    <p className='text-white'>
                        {notification.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default NotificationsFeed