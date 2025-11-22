import styles from './CategoryBarChart.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CategoryBarChart({ projects }) {

    // Lógica para agrupar custos por categoria
    const categories = ['Infra', 'Desenvolvimento', 'Designer', 'Planejamento'];
    
    const data = categories.map(cat => {
        const filtered = projects.filter(p => p.category && p.category.name === cat);
        
        return {
            name: cat,
            Orçamento: filtered.reduce((acc, p) => acc + parseFloat(p.budget || 0), 0),
            Gasto: filtered.reduce((acc, p) => acc + parseFloat(p.cost || 0), 0)
        };
    });

    return (
        <div className={styles.chart_container}>
            <h3>Investimento por Categoria</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    <XAxis dataKey="name" stroke="#ccc" tick={{fill: '#ccc'}} />
                    <YAxis stroke="#ccc" tick={{fill: '#ccc'}} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#222', border: '1px solid #444', borderRadius: '5px' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{fill: '#333'}}
                    />
                    <Legend />
                    {/* Barras: Dourado para Orçamento, Cinza Azulado (tema) para Gasto */}
                    <Bar dataKey="Orçamento" fill="#FFBB33" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="Gasto" fill="#00ADB5" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CategoryBarChart;