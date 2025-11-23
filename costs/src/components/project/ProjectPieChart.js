import styles from './ProjectPieChart.module.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function ProjectPieChart({ budget, cost }) {
    
    const available = parseFloat(budget) - parseFloat(cost);
    
    // Dados para o gráfico
    const data = [
        { name: 'Utilizado', value: parseFloat(cost) },
        { name: 'Disponível', value: available < 0 ? 0 : available }
    ];

    // Cores: Amarelo (Utilizado) e Cinza (Disponível)
    const COLORS = ['#FFBB33', '#333']; 

    // --- FUNÇÃO DE FORMATAÇÃO ---
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    // Custom Tooltip para formatar o valor quando passa o mouse
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ 
                    backgroundColor: '#222', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #444' 
                }}>
                    <p style={{ color: payload[0].payload.fill, fontWeight: 'bold', margin: 0 }}>
                        {payload[0].name}: {formatCurrency(payload[0].value)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.graph_container}>
            <div className={styles.graph_text}>
                <h3>Uso do Orçamento</h3>
                {/* Formatando o Total no centro */}
                <p>Total: <strong>{formatCurrency(budget)}</strong></p>
            </div>
            
            <div className={styles.chart_wrapper}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <div className={styles.legend}>
                <div className={styles.legend_item}>
                    {/* Formatando a Legenda */}
                    <span className={styles.dot_used}></span> Utilizado: {formatCurrency(cost)}
                </div>
                <div className={styles.legend_item}>
                    <span className={styles.dot_available}></span> Disponível: {formatCurrency(available)}
                </div>
            </div>
        </div>
    );
}

export default ProjectPieChart;