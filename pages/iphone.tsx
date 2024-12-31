import Head from "next/head";
import styles from './styles/content.module.css';

export default function Path1() {
    return (
        <>
            <Head>
                <title>아이폰 정보 - 최신 모델 및 기능</title>
                <meta name="description" content="아이폰의 최신 모델과 주요 기능에 대한 정보를 제공합니다." />
            </Head>
            <main className={styles.container}>
                <h1 className={styles.title}>아이폰 최신 정보</h1>
                <p className={styles.date}>2024년 12월 31일 작성</p>

                <article className={styles.article}>
                    <section>
                        <h2>1. 최신 아이폰 모델</h2>
                        <p>
                            애플은 최근 아이폰 15 시리즈를 발표하며 스마트폰 시장에서 다시 한 번 주목을 받았습니다.
                            이번 시리즈는 <strong>아이폰 15, 아이폰 15 Plus, 아이폰 15 Pro, 아이폰 15 Pro Max</strong>
                            총 4가지 모델로 출시되었습니다.
                        </p>
                        <p>
                            각 모델은 다양한 크기와 성능을 제공하며, Pro 모델은 티타늄 프레임과 더 강력한 A17 Pro
                            칩셋을 특징으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2>2. 주요 기능</h2>
                        <ul>
                            <li><strong>USB-C 포트 도입:</strong> 아이폰 15 시리즈부터 USB-C 포트를 채택하여 더 빠른 데이터 전송과 충전이 가능합니다.</li>
                            <li><strong>카메라 업그레이드:</strong> Pro Max 모델에서는 5배 광학 줌 기능이 추가되었으며, 전반적인 저조도 촬영 성능이 향상되었습니다.</li>
                            <li><strong>다이나믹 아일랜드:</strong> 전 모델에 다이나믹 아일랜드가 탑재되어 더 직관적인 알림 및 멀티태스킹 경험을 제공합니다.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. 색상 옵션</h2>
                        <p>
                            아이폰 15 시리즈는 각기 다른 색상 옵션으로 제공됩니다.
                            기본 모델은 블루, 핑크, 옐로우, 그린, 블랙 색상이 있으며, Pro 모델은 티타늄 소재로 구성된
                            내추럴, 블루, 화이트, 블랙 색상이 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2>4. 가격</h2>
                        <p>
                            아이폰 15 시리즈의 가격은 다음과 같습니다:
                        </p>
                        <ul>
                            <li>아이폰 15: ₩1,250,000부터</li>
                            <li>아이폰 15 Plus: ₩1,350,000부터</li>
                            <li>아이폰 15 Pro: ₩1,550,000부터</li>
                            <li>아이폰 15 Pro Max: ₩1,850,000부터</li>
                        </ul>
                        <p>
                            각 모델의 가격은 저장 용량에 따라 상이하며, 기본적으로 128GB, 256GB, 512GB, 1TB 옵션이 제공됩니다.
                        </p>
                    </section>

                    <section>
                        <h2>5. 결론</h2>
                        <p>
                            아이폰 15 시리즈는 디자인, 성능, 사용자 경험 모두에서 한 단계 진화한 모습을 보여줍니다.
                            USB-C 포트, 다이나믹 아일랜드, 향상된 카메라와 같은 최신 기술을 통해 애플은
                            다시 한 번 스마트폰 시장에서의 혁신을 입증했습니다.
                        </p>
                        <p>
                            더 많은 정보를 원한다면 애플 공식 웹사이트를 방문하거나, 가까운 애플 매장에서
                            직접 확인해 보세요.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}
