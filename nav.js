document.getElementById('top').innerHTML ='<a href="index.html"><img id=\'logo\' src="img/LOGO1.jpg"></a> </div>';



document.getElementById('top').innerHTML +=
'<div class=\'navigation\'>\
                <ul>\
                <li><a href="index.html">主頁</a></li>\
                <li class="dropdown">\
                  <a>新聞</a>\
                  <div class="dropdown-content">\
						<a href="news.html">今日焦點</a>\
						<a href="news1.html">本地新聞</a>\
						<a href="news2.html">視頻新聞</a>\
						<a href="news3.html">工商新聞</a>\
					  </div>\
                </li>\
                <li><a href=\'\'>社區動態</a></li>\
				<li class="dropdown">\
						<a>廣告/電話簿</a>\
						<div class="dropdown-content">\
							<a href="ad.html">廣告價目</a>\
							<a href="ad1.html">分類廣告</a>\
							<a href="ad2.html">電話簿</a>\
						</div>\
						</li>\
                <li><a href=\'\'>線上讀報</a></li>\
                <li class="dropdown">\
                        <a>聯絡我們</a>\
                        <div class="dropdown-content">\
                          <a href="contact.html">聯絡訊息</a>\
                          <a href="contact1.html">地圖</a>\
                        </div>\
					  </li>\
				<li class="dropdown">\
					<a>其他</a>\
					<div class="dropdown-content">\
						<a href="#">A</a>\
						<a href="#">B</a>\
					</div>\
					</li>\
              </ul>\
			</div>';
