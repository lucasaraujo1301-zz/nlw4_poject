import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return (
      <div className={styles.profileContainer}>
          <img src="https://github.com/lucasaraujo1301.png" alt="Lucas Araujo"/>
          <div>
              <strong>Lucas Araújo</strong>
              <p>
                  <img src="icons/level.svg" alt=""/>
                  Level 1
              </p>
          </div>
      </div>
    );
}