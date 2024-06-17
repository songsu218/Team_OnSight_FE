import axios from 'axios';

// 실제 작성 코드는 각자 변수를 만들어서 작성 후 api에 추가 각자 api에 대해 간단하게 명세
// post 작성방법
// api: (data) => { return instance.post('/api경로', data) }

/**
 * Axios 인스턴스 생성
 * const api = axios.create({
 * baseURL: 'http://localhost:5000/api', // API 기본 URL 설정
 * timeout: 1000,
 * headers: { 'Content-Type': 'application/json' }
 * });
 * 
 * const encodeIfNeeded = (value) => {
 * // 정규식을 사용하여 문자열에 한글이 포함되어 있는지 체크합니다.
 * const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value);
 * // 한글이 포함되어 있다면 인코딩을 수행합니다.
 * if (hasKorean) {
 * return encodeURIComponent(value);
 * }
 * return value;
 * };
 */

const baseURL = 'http://localhost:5000/api';

// axios 인스턴스를 생성합니다.
const instance = axios.create({
	baseURL,
});

const ch = {
	chEnter:(challengename,members) => {
		return instance.get('/challengeEnter', { params: { challengename: challengename , members: members} });
	},
	/**
	 * @param {array} date 
	 * @returns {*} 챌린지명,클라이밍장이름,썸네일
	 */
	chCurrentList: (date) => {
		return instance.get('/challengeNowList', { params: { date: date} });
	},
	/**
	 * //실행안됨(records.id  없음) - records.id 생성후 확인 필요
	 * @param {array} date 
	 * @returns {*} 챌린지명,현재1등(id,nick),썸네일
	 */
	chPastedList: (date) => { 
		return instance.get('/challengePastList', { params: { date: date} });
	},
	/**
	 * @param {array} date 
	 * @param {string} member_id
	 * @returns {*} 챌린지명,클라이밍장이름,썸네일
	 */
	chCurrentMyList: (date,member_id) => {
		return instance.get('/challengeNowList', { params: { date: date, member_id: member_id} });
	},
	/**
	 * //실행안됨(records.id  없음) - records.id 생성후 확인 필요
	 * @param {array} date 
	 * @param {string} member_id
	 * @returns {*} 챌린지명,현재1등(id,nick),썸네일
	 */
	chPastedMyList: (date,member_id) => { 
		return instance.get('/challengePastList', { params: { date: date , member_id: member_id} });
	},
	/**
	 * @param {string} challengename 
	 * @returns {*} id.nick,썸네일
	 */
	chJoinList: (challengename) => {
		return instance.get('/challengeNowDetail', { params: { challengename: challengename} });
	},
	/** 
	 * //실행안됨(records.id  없음) - records.id 생성후 확인 필요
	 * @param {string} challengename 
	 * @returns {*} (순위),id.nick,썸네일
	 */
	chRankedList: (challengename) => { 
		return instance.get('/challengePastDetail', { params: { challengename: challengename} });
	},
}

//새로 추가되는 api list는 ,로 추가
export { ch };