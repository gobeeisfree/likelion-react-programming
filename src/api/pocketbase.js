import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

// 자동 취소 설정 해제
pb.autoCancellation(false);

// PocketBase SDK {}
export default pb;
