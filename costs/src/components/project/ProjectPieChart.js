import styles from './ProjectPieChart.module.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function ProjectPieChart({ budget, cost }) {
    
    const available = parseFloat(budget) - parseFloat(cost);
    
    // Dados para o gráfico
    const data = [
        { name: 'Utilizado', value: parseFloat(cost) },
        { name: 'Disponível', value: available < 0 ? 0 : available } // Evita travar se for negativo
    ];

    // Cores do Tema: Amarelo (Utilizado) e Cinza Escuro (Disponível)
    const COLORS = ['#FFBB33', '#333']; 

    return (
        <div className={styles.graph_container}>
            <div className={styles.graph_text}>
                <h3>Uso do Orçamento</h3>
                <p>Total: <strong>R$ {budget}</strong></p>
            </div>
            
            <div className={styles.chart_wrapper}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60} // Cria o furo no meio (Donut Chart)
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none" // Remove a borda branca padrão feia
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#222', border: 'none', borderRadius: '5px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <div className={styles.legend}>
                <div className={styles.legend_item}>
                    <span className={styles.dot_used}></span> Utilizado: R$ {cost}
                </div>
                <div className={styles.legend_item}>
                    <span className={styles.dot_available}></span> Disponível: R$ {available}
                </div>
            </div>
        </div>
    );
}

export default ProjectPieChart;