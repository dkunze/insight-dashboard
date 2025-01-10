import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newDataPoint = {
          time: counter,
          value: Math.floor(Math.random() * 100),
        }
        return [...prevData.slice(-9), newDataPoint] // Keep only the last 10 data points
      })
      setCounter((prev) => prev + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [counter])

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Box
        sx={{
          bgcolor: '#1976d2',
          color: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Data Insights Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Interactive real-time data visualization
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Real-Time Line Chart
        </Typography>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Bar Chart
        </Typography>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Pie Chart
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Box>

      <Box mt={4}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2025 Data Insights Dashboard. All rights reserved.
        </Typography>
      </Box>
    </Container>
  )
}

export default App
