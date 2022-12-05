import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import React, { createElement, useState } from 'react';
import classNames from 'classnames/bind';
import 'antd/dist/antd.min.css';

import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

const Comments = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className={cx('comment-action')}>{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className={cx('comment-action')}>{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Trả lời</span>,
    ];
    return (
        <Comment
            actions={actions}
            author={
                <a className={cx('user')} href="/login">
                    Nguyễn Phong
                </a>
            }
            avatar={
                <Avatar
                    className={cx('avatar')}
                    src="https://img.wattpad.com/727606e8e6d89d9670522f8cd708c3d22adf9a98/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f594f354c30444e5f6371526643773d3d2d3638322e313562663637333732616431353835333230303432363134373438372e6a7067?s=fit&w=720&h=720"
                    alt="Han Solo"
                />
            }
            content={
                <p className={cx('content')}>
                    Điện thoại đẹp quá, shop tư vấn nhiệt tình, đúng như mô tả, cảm ơn shop nhiều.
                </p>
            }
            datetime={
                <Tooltip title="2016-11-22 11:22:33">
                    <span>8 giờ trước</span>
                </Tooltip>
            }
        />
    );
};

export default Comments;
