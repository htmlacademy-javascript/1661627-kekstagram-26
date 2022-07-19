import {PHOTO_AMOUNT, createRandomPosts} from './data.js';
import {displayPosts} from './photo-thumbnails.js';
import './photo-thumbnails.js';
import './fullsize-picture.js';
import './form.js';

const renderPost = createRandomPosts(PHOTO_AMOUNT);

displayPosts(renderPost);
