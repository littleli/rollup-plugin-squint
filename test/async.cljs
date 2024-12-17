(ns async)

(defn ^:async async-unary
  [a]
  (+ a 1))

(defn ^:async async-binary
  [a b]
  (- b a))
