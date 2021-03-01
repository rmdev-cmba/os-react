// https://www.youtube.com/watch?v=xvdAoEGRFyI
// 1:20:00
export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            {/** barra preta */}
            <div>
                {/** barra verde */}
                <div style={{ width: '50%' }} />
                {/** valor numerico da barra verde */}
                <span className="current-experience" style={{left: '50%'}}>
                    300 xp
                </span>
                {/** este span ficará abaixo devido a configuração do 'container' */}
            </div>
            <span>600 xp</span>
        </header>

    );
}