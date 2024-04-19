const mysql = require("../../connection/mysqlConnection");

function selectCenterAll(callback) {
  mysql.query(
    `insert into review(user_id,point,review_img,review)
    values('0123_test',4.5,'사진경로','다이어트 겸 운동기구들과 친해지고 싶어서 강신욱 선생님과 피티를 진행하고 있습니다 피티를 처음 배우는 거라 어떤 트레이너와 할지도 많이 고민되었는데 선생님이 경력도 많으시고 지식도 진짜 많으셔서 올바른 자세로 기구 다루는 법이나 근육 쓰는 법, 생활 습관 등등 잘 알려주시고 궁금한 것들 물어봐도 바로바로 친절하게 알려주세요 한번만 체험수업 들어봐도 대충 가르치는 트레이너가 아니라 전문가라는 거 느끼실 거예요 강신욱쌤 강추하고 항상 열정 넘치는 수업 감사합니다 😆');`,
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

module.exports = {
  selectCenterAll: selectCenterAll,
};
