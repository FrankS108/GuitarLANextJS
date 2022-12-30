import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"
export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={"Sobre nosotros, guitarLA, tienda de música"}
    >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image src={"/img/nosotros.jpg"} alt="Imagen sobre nosotros" width={1000} height={800}/>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at hendrerit mauris. Etiam laoreet, nunc quis tristique vehicula, est ligula dictum augue, sed elementum tortor nunc vitae felis. Curabitur tincidunt est non dolor bibendum dignissim. Nam eu elit tempor, malesuada ligula a, cursus tellus. Nulla facilisi. Nullam efficitur tortor ex, eget mollis mi rutrum id. 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at hendrerit mauris. Etiam laoreet, nunc quis tristique vehicula, est ligula dictum augue, sed elementum tortor nunc vitae felis. Curabitur tincidunt est non dolor bibendum dignissim. Nam eu elit tempor, malesuada ligula a, cursus tellus. 
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
