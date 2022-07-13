import {PHOTO_AMOUNT, createRandomPosts} from './data.js';
import {displayPosts} from './photo-thumbnails.js';

const renderPost = createRandomPosts(PHOTO_AMOUNT);

displayPosts(renderPost);
