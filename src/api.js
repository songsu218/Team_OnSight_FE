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

const baseURL = 'http://localhost:8000';

// axios 인스턴스를 생성합니다.
const instance = axios.create({
  baseURL,
});

const ch = {
  /**
   * 참가등록
   * @param {string} challengename
   * @param {array} members
   * @returns  챌린지목록
   */
  chEnter: (challengename, members) => {
    return instance.post('/challenge/challegeEnter', {
      challengename: challengename,
      members: members,
    });
  },
  /**
   * 챌린지등록
   * @param {string} challengename
   * @param {string} id
   * @param {string} center
   * @param {string} address
   * @param {string} date yyyy-MM-dd
   * @returns 챌린지목록
   */
  chRegister: (challengename, id, center, address, date) => {
    return instance.post('/challenge/register', {
      challengename: challengename,
      id: id,
      center: center,
      address: address,
      date: date,
    });
  },

  /**
   * challenge 전체목록
   * @param {string} tag ('TOT','NOW','PAST')
   * @returns challenge Collection, 썸네일
   */
  chListEachStatus: (tag) => {
    return instance.post(
      '/challenge/challengeTotList',
      { STATE: tag },
      { headers: { 'Content-Type': 'application/json' } }
    );
  },

  /**
   * challenge 나의목록
   * @param {string} tag ('TOT','NOW','PAST')
   * @param {string} member_id
   * @returns challenge Collection, 썸네일
   */
  chMyList: (tag, member_id) => {
    return instance.post('/challenge/challengeMyList', {
      STATE: tag,
      member_id: member_id,
    });
  },

  /**
   * challenge memberList (참가자목록)
   * @param {string} challengename
   * @returns {*} id.nick,썸네일
   */
  chJoinList: (challengename) => {
    return instance.post('/challenge/challengeMemberList', {
      challengename: challengename,
    });
  },

  /**
   * challenge Ranking (순위목록)
   * @param {string} challengename
   * @returns {*} (순위),id.nick,썸네일,total
   */
  chRank: (challengename) => {
    return instance.post('/challenge/challengeRanking', {
      challengename: challengename,
    });
  },
};

//새로 추가되는 api list는 ,로 추가
export { ch };
