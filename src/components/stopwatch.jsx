import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';

const Stopwatch = ({ isRunning, resetSignal }) => {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  // Start/stop effect
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000); // 1 second
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Reset effect
  useEffect(() => {
    if (resetSignal) {
      setElapsed(0);
    }
  }, [resetSignal]);

  return (
    <Text style={{ fontSize: 27,color:'rgba(204, 14, 14, 1)' }}>
      {elapsed}s
    </Text>
  );
};

export default Stopwatch;