let testbtn = document.querySelector('.ajax1');

$(document).ready(
    $(testbtn).click(function () {
        // alert("응답하라");
        {
            $.ajax({
                type: "GET",                // GET 또는 POST
                url: '../json/message_address.json',      // 서버측에서 가져올 페이지
                success: function(result) {
                    console.log(result);
                    let output =
                      "<table><thead><tr><th>부서</th><th>직책</th><th>이름</th><th>사원코드</th></thead><tbody>";
                    for (let i in result) {
                      output +=
                        "<tr><td>" +
                        result[i].부서 +
                        "</td><td>" +
                        result[i].직책 +
                        "</td><td>" +
                        result[i].이름 +
                        "</td><td>" +
                        result[i].사원코드 +
                        "</td></tr>";
                    }
                    output += "</tbody></table>";
            
                    $("#modal_personal_info").html(output);
                    $("table").addClass("dept_right");
                  }
            });
        }
    })
);