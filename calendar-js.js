const data = [
    "<div class=\"calendar-content\">\
        <h1>March 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td>1</td>\
                <td>2</td>\
                <td>3</td>\
                <td>4</td>\
                <td>5</td>\
            </tr>\
            <tr>\
                <td>6</td>\
                <td>7</td>\
                <td>8</td>\
                <td>9</td>\
                <td>10</td>\
                <td>11</td>\
                <td>12</td>\
            </tr>\
            <tr>\
                <td>13</td>\
                <td>14</td>\
                <td>15</td>\
                <td>16</td>\
                <td>17</td>\
                <td>18</td>\
                <td>19</td>\
            </tr>\
            <tr>\
                <td>20</td>\
                <td>21</td>\
                <td>22</td>\
                <td>23</td>\
                <td>24</td>\
                <td>25</td>\
                <td>26</td>\
            </tr>\
            <tr>\
                <td>27</td>\
                <td>28</td>\
                <td>29</td>\
                <td>30</td>\
                <td>31</td>\
                <td></td>\
                <td></td>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
        </div>",
        "<div class=\"calendar-content\">\
        <h1>APRIL 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td>1</td>\
                <td>2</td>\
            </tr>\
            <tr>\
                <td>3</td>\
                <td>4</td>\
                <td>5</td>\
                <td class=\"event\">6<span>WIA1002 LAB TEST</span></td>\
                <td class=\"event\">7<span>WIE2003 ASSIGNMENT DUE & WID3006 LAB 1 SUBMISSION</span></td>\
                <td>8</td>\
                <td>9</td>\
            </tr>\
            <tr>\
                <td>10</td>\
                <td>11</td>\
                <td>12</td>\
                <td>13</td>\
                <td>14</td>\
                <td>15</td>\
                <td>16</td>\
            </tr>\
            <tr>\
                <td>17</td>\
                <td>18</td>\
                <td>19</td>\
                <td>20</td>\
                <td>21</td>\
                <td>22</td>\
                <td>23</td>\
            </tr>\
            <tr>\
                <td>24</td>\
                <td>25</td>\
                <td>26</td>\
                <td>27</td>\
                <td class=\"event\">28<span>WIE2003 MID-SEM TEST</span></td>\
                <td>29</td>\
                <td>30</td>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
    </div>",
    "<div class=\"calendar-content\">\
        <h1>MAY 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td>1</td>\
                <td class=\"sembreak\">2</td>\
                <td class=\"sembreak\">3</td>\
                <td class=\"event\">4<span>WIA1002 ONLINE TEST</span></td>\
                <td class=\"sembreak\">5</td>\
                <td class=\"sembreak\">6</td>\
                <td class=\"sembreak\">7</td>\
            </tr>\
            <tr>\
                <td class=\"sembreak\">8</td>\
                <td>9</td>\
                <td>10</td>\
                <td class=\"event\">11<span>WIA1002 LAB TEST & WIA1003 MID-SEM TEST</span></td>\
                <td class=\"event\">12<span>WID3006 LAB 2 SUBMISSION</span></td>\
                <td class=\"event\">13<span>WIA1003 MID-SEM TEST</span></td>\
                <td>14</td>\
            </tr>\
            <tr>\
                <td>15</td>\
                <td>16</td>\
                <td>17</td>\
                <td>18</td>\
                <td class=\"event\">19<span>WID3006 MID-SEM TEST</span></td>\
                <td>20</td>\
                <td>21</td>\
            </tr>\
            <tr>\
                <td>22</td>\
                <td>23</td>\
                <td class=\"special\">24<span>DAJIE's CONVOCATION</span></td>\
                <td>25</td>\
                <td>26</td>\
                <td>27</td>\
                <td>28</td>\
            </tr>\
            <tr>\
                <td>29</td>\
                <td>30</td>\
                <td>31</td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
    </div>",
    "<div class=\"calendar-content\">\
        <h1>JUNE 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td class=\"event\">1<span>WIA1003 ALTERNATIVE ASSESSMENT 1</span></td>\
                <td>2</td>\
                <td class=\"event\">3<span>WIA1003 ALTERNATIVE ASSESSMENT 1</span></td>\
                <td>4</td>\
            </tr>\
            <tr>\
                <td>5</td>\
                <td>6</td>\
                <td>7</td>\
                <td>8</td>\
                <td>9</td>\
                <td class=\"event\">10<span>WID3006 PROJECT DUE</span></td>\
                <td>11</td>\
            </tr>\
            <tr>\
                <td>12</td>\
                <td>13</td>\
                <td>14</td>\
                <td>15</td>\
                <td>16</td>\
                <td>17</td>\
                <td>18</td>\
            </tr>\
            <tr>\
                <td>19</td>\
                <td>20</td>\
                <td>21</td>\
                <td class=\"event\">22<span>WIA1003 ALTERNATIVE ASSESSMENT 2</span></td>\
                <td class=\"event\">23<span>WIE2003 GROUP PROJECT DUE & WID3006 LAB 3 SUBMISSION</span></td>\
                <td class=\"event\">24<span>WIA1003 ALTERNATIVE ASSESSMENT 2</span></td>\
                <td>25</td>\
            </tr>\
            <tr>\
                <td>26</td>\
                <td>27</td>\
                <td>28</td>\
                <td>29</td>\
                <td>30</td>\
                <td></td>\
                <td></td>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
    </div>",
    "<div class=\"calendar-content\">\
        <h1>JULY 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td>1</td>\
                <td>2</td>\
            </tr>\
            <tr>\
                <td>3</td>\
                <td>4</td>\
                <td>5</td>\
                <td>6</td>\
                <td>7</td>\
                <td>8</td>\
                <td>9</td>\
            </tr>\
            <tr>\
                <td>10</td>\
                <td>11</td>\
                <td>12</td>\
                <td>13</td>\
                <td>14</td>\
                <td>15</td>\
                <td>16</td>\
            </tr>\
            <tr>\
                <td>17</td>\
                <td>18</td>\
                <td>19</td>\
                <td>20</td>\
                <td>21</td>\
                <td>22</td>\
                <td>23</td>\
            </tr>\
            <tr>\
                <td>24</td>\
                <td>25</td>\
                <td>26</td>\
                <td>27</td>\
                <td>28</td>\
                <td>29</td>\
                <td>30</td>\
            </tr>\
            <tr>\
                <td>31</td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
    </div>",
    "<div class=\"calendar-content\">\
        <h1>AUGUST 2022</h1>\
        <table class=\"calendar\">\
            <tr>\
                <th>SUN</th>\
                <th>MON</th>\
                <th>TUE</th>\
                <th>WED</th>\
                <th>THU</th>\
                <th>FRI</th>\
                <th>SAT</th>\
            </tr>\
            <tr>\
                <td></td>\
                <td>1</td>\
                <td>2</td>\
                <td>3</td>\
                <td>4</td>\
                <td>5</td>\
                <td>6</td>\
            </tr>\
            <tr>\
                <td>7</td>\
                <td>8</td>\
                <td>9</td>\
                <td>10</td>\
                <td>11</td>\
                <td>12</td>\
                <td>13</td>\
            </tr>\
            <tr>\
                <td>14</td>\
                <td>15</td>\
                <td>16</td>\
                <td>17</td>\
                <td>18</td>\
                <td>19</td>\
                <td>20</td>\
            </tr>\
            <tr>\
                <td>21</td>\
                <td>22</td>\
                <td>23</td>\
                <td>24</td>\
                <td>25</td>\
                <td>26</td>\
                <td>27</td>\
            </tr>\
            <tr>\
                <td>28</td>\
                <td>29</td>\
                <td>30</td>\
                <td>31</td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
            <tr>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td></td>\
            </tr>\
        </table>\
    </div>"
];

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const sliderContent = document.querySelector(".slider-content");

var index = 0;
sliderContent.innerHTML = data[index];

leftBtn.addEventListener("click", function(){
    if( index > 0){
        index -= 1;   
    }
    sliderContent.innerHTML = data[index];
});

rightBtn.addEventListener("click", function(){
    if( index < data.length - 1 ){
        index += 1;   
    }
    sliderContent.innerHTML = data[index];
});

const editBtn = document.querySelector(".edit-btn");
const message = document.querySelector(".message-wrapper");

editBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});

const closeBtn = document.querySelector(".close-message-btn");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});