function Calendar() {
    return (
        <section className="information-calendar">
            <header className="">
                <h1>Календарь важных дней!</h1>
                <div className="d-flex justify-end align-center">
                    <img src="../src/assets/calendar-swipeLeft.svg" alt="swipeLeft" />
                    <p>месяц</p>
                    <img src="../src/assets/calendar-swipeRight.svg" alt="swipeRight" />
                </div>
            </header>
            <div className="calendar">
                <div className="calendar-days d-flex">
                    <p>ПН</p>
                    <p>ВТ</p>
                    <p>СР</p>
                    <p>ЧТ</p>
                    <p>ПТ</p>
                    <p className="calendar-days-weekend">СБ</p>
                    <p className="calendar-days-weekend">ВС</p>
                </div>
                <div className="calendar-blocks d-flex flex-wrap">
                    <div className="calendar-month d-flex justify-end">
                        <p>Янв 1</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <img
                            src="../src/assets/calendar-science.svg"
                            alt="img-science"
                            width={55}
                        />
                        <p>2</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>3</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>4</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>5</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>6</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>7</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>8</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>9</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>10</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>11</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>12</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>13</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>14</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>15</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>16</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>17</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>18</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>19</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <img src="../src/assets/calendar-microscrope.svg" alt="" width={55} />
                        <p>20</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>21</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <img src="../src/assets/calendar-party.svg" alt="" width={55} />
                        <p>22</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>23</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>24</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>25</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>26</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>27</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>28</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>29</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <p>30</p>
                    </div>
                    <div className="calendar-month d-flex justify-end">
                        <img src="../src/assets/calendar-counter.svg" alt="" width={55} />
                        <p>31</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>Фев 1</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>2</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>3</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>4</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>5</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>6</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>7</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>8</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>9</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>10</p>
                    </div>
                    <div className="calendar-anotherMonth d-flex justify-end">
                        <p>11</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calendar;
