import Head from "next/head";
import styles from './styles/content.module.css';

export default function Path2() {
    return (
        <>
            <Head>
                <title>갤럭시 정보 - 최신 모델 및 기능</title>
                <meta name="description" content="갤럭시의 최신 모델과 주요 기능에 대한 정보를 제공합니다." />
            </Head>
            <main className={styles.container}>
                <h1 className={styles.title}>갤럭시 최신 정보</h1>
                <p className={styles.date}>2024년 12월 31일 작성</p>

                <article className={styles.article}>
                    <section>
                        <h2>1. 최신 갤럭시 모델</h2>
                        <p>
                            삼성은 최근 갤럭시 S24 시리즈를 발표하며 스마트폰 시장에서 큰 주목을 받았습니다.
                            이번 시리즈는 <strong>갤럭시 S24, 갤럭시 S24+, 갤럭시 S24 Ultra</strong> 총 3가지 모델로 출시되었습니다.
                        </p>
                        <p>
                            각 모델은 다양한 크기와 성능을 제공하며, Ultra 모델은 200MP 카메라와 120Hz AMOLED 디스플레이를 특징으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2>2. 주요 기능</h2>
                        <ul>
                            <li><strong>120Hz 다이나믹 AMOLED 2X 디스플레이:</strong> 갤럭시 S24 시리즈는 더욱 향상된 디스플레이 기술을 적용하여 부드러운 화면 전환을 제공합니다.</li>
                            <li><strong>200MP 카메라:</strong> 갤럭시 S24 Ultra는 200MP 카메라를 탑재하여 더 뛰어난 세부 묘사와 색감을 제공합니다.</li>
                            <li><strong>고속 충전 및 배터리:</strong> 갤럭시 S24 시리즈는 45W 고속 충전과 더 오래가는 배터리 수명을 자랑합니다.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. 색상 옵션</h2>
                        <p>
                            갤럭시 S24 시리즈는 다양한 색상 옵션으로 제공됩니다.
                            기본 모델은 팬텀 블랙, 팬텀 화이트, 팬텀 그린, 팬텀 블루 색상이 있으며, Ultra 모델은 미스틱 블랙, 미스틱 화이트 색상이 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2>4. 가격</h2>
                        <p>
                            갤럭시 S24 시리즈의 가격은 다음과 같습니다:
                        </p>
                        <ul>
                            <li>갤럭시 S24: ₩1,200,000부터</li>
                            <li>갤럭시 S24+: ₩1,350,000부터</li>
                            <li>갤럭시 S24 Ultra: ₩1,600,000부터</li>
                        </ul>
                        <p>
                            각 모델의 가격은 저장 용량에 따라 상이하며, 기본적으로 128GB, 256GB, 512GB, 1TB 옵션이 제공됩니다.
                        </p>
                    </section>

                    <section>
                        <h2>5. 결론</h2>
                        <p>
                            갤럭시 S24 시리즈는 디자인, 성능, 카메라 등 여러 측면에서 뛰어난 성능을 발휘하며, 특히 Ultra 모델은 스마트폰의 한계를 넘어선 성능을 자랑합니다.
                        </p>
                        <p>
                            더 많은 정보를 원한다면 삼성 공식 웹사이트를 방문하거나, 가까운 삼성 매장에서
                            직접 확인해 보세요.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}
