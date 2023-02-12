import { AppProps } from 'next/app';

type Props = {
    page: number;
};

export default function Project(props: Props) {
    switch (props.page) {
        case 1:
            return (
                <div>
                    <h1>나의 Project 입니다. </h1>
                    <div>2022.01 – 2022.04 (4 개월)</div>
                    <div>한화 솔루션 MES 시스템 운영</div>
                    <div>∙ 운영 인원: 2명</div>
                    <div> ∙ 개발 환경: Eclipse, Visual Studio ∙ </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            );
        default:
            return (
                <div>
                    <h1>나의 Project 입니다. </h1>
                </div>
            );
    }
}
