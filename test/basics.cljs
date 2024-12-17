(ns basics)

(defn unit
  []
  "unit")

(defn unary
  [a]
  (* a a))

(defn binary
  [a b]
  (+ a b))

(defn ternary
  [a b c]
  (+ a (- b c)))

(defn- priv
  [_]
  (+ 1 2))

(js/console.log (priv 0))
